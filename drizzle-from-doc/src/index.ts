import 'dotenv/config';
import express, { Request, Response } from 'express';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq, sql } from 'drizzle-orm';
import { neon } from '@neondatabase/serverless';
import { usersTable, postsTable } from './db/schema';

// Initialize Express app and database connection
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const sqlClient = neon(process.env.DATABASE_URL!);
const db = drizzle(sqlClient);

// === API Routes for Users ===

// Get all users
app.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await db.select().from(usersTable);
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users.' });
  }
});

// Create a new user
app.post('/users', async (req: Request, res: Response) => {
  try {
    const { name, age, email } = req.body;
    if (!name || !age || !email) {
      return res.status(400).json({ error: 'Name, age, and email are required.' });
    }

    const newUser = { name, age, email };
    const insertedUser = await db.insert(usersTable).values(newUser).returning();
    res.status(201).json(insertedUser[0]);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user.' });
  }
});

// === API Routes for Blogs ===

// Get all blogs with author information using a JOIN
app.get('/blogs', async (req: Request, res: Response) => {
  try {
    const blogs = await db.select({
        id: postsTable.id,
        title: postsTable.title,
        content: postsTable.content,
        createdAt: postsTable.createdAt,
        author: {
          id: usersTable.id,
          name: usersTable.name,
          email: usersTable.email,
        }
      })
      .from(postsTable)
      .innerJoin(usersTable, eq(postsTable.authorId, usersTable.id))
      .orderBy(sql`${postsTable.createdAt} desc`); // Order by most recent

    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Failed to fetch blogs.' });
  }
});

// Create a new blog post
app.post('/blogs', async (req: Request, res: Response) => {
  try {
    const { title, content, authorId } = req.body;
    if (!title || !content || !authorId) {
      return res.status(400).json({ error: 'Title, content, and authorId are required.' });
    }

    // Check if author exists
    const author = await db.select().from(usersTable).where(eq(usersTable.id, authorId));
    if (author.length === 0) {
      return res.status(404).json({ error: 'Author not found.' });
    }

    const newPost = { title, content, authorId };
    const insertedPost = await db.insert(postsTable).values(newPost).returning();
    res.status(201).json(insertedPost[0]);
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({ error: 'Failed to create blog post.' });
  }
});

// Get a single blog post by ID with author info
app.get('/blogs/:id', async (req: Request, res: Response) => {
  try {
    const postId = parseInt(req.params.id);
    if (isNaN(postId)) {
      return res.status(400).json({ error: 'Invalid blog ID.' });
    }

    const post = await db.select({
        id: postsTable.id,
        title: postsTable.title,
        content: postsTable.content,
        createdAt: postsTable.createdAt,
        author: {
          id: usersTable.id,
          name: usersTable.name,
          email: usersTable.email,
        }
      })
      .from(postsTable)
      .innerJoin(usersTable, eq(postsTable.authorId, usersTable.id))
      .where(eq(postsTable.id, postId));
    
    if (post.length === 0) {
      return res.status(404).json({ error: 'Blog post not found.' });
    }
    
    res.status(200).json(post[0]);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    res.status(500).json({ error: 'Failed to fetch blog post.' });
  }
});

// Update a blog post
app.put('/blogs/:id', async (req: Request, res: Response) => {
  try {
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;
    if (isNaN(postId) || (!title && !content)) {
      return res.status(400).json({ error: 'Invalid ID or no fields to update.' });
    }

    const updatedPost = await db.update(postsTable)
      .set({ title, content })
      .where(eq(postsTable.id, postId))
      .returning();

    if (updatedPost.length === 0) {
      return res.status(404).json({ error: 'Blog post not found.' });
    }

    res.status(200).json(updatedPost[0]);
  } catch (error) {
    console.error('Error updating blog post:', error);
    res.status(500).json({ error: 'Failed to update blog post.' });
  }
});

// Delete a blog post
app.delete('/blogs/:id', async (req: Request, res: Response) => {
  try {
    const postId = parseInt(req.params.id);
    if (isNaN(postId)) {
      return res.status(400).json({ error: 'Invalid blog ID.' });
    }

    const deletedPost = await db.delete(postsTable)
      .where(eq(postsTable.id, postId))
      .returning();

    if (deletedPost.length === 0) {
      return res.status(404).json({ error: 'Blog post not found.' });
    }

    res.status(200).json({ message: 'Blog post deleted successfully.' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    res.status(500).json({ error: 'Failed to delete blog post.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});