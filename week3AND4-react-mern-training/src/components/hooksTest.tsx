import { useEffect, useRef, useState } from "react";

type FormType = {
  firstname: string;
  lastname: string;
  age: number;
};

const HooksTest: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);


  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  const [formData, setFormData] = useState<FormType>({
    firstname: "",
    lastname: "",
    age: 0,
  });

  useEffect(() => {
    console.log(formData.firstname)
    console.log(formData.lastname)
    console.log(formData.age)
  }, [formData])


  const handleSubmit = () => { };

  const referenceVariable = useRef("alo")

  useEffect(() => {
    console.log(referenceVariable.current)
  }, [referenceVariable])
  return (
    <>
      <div>
        <section>
          <div>
            <h1>Example one: simple (counter-app) </h1>
            <div>
              <h2>Use State Hook Test: </h2>
              <input value={counter} readOnly />
            </div>
            <div>
              <button onClick={handleIncrement}>+</button>
              <button onClick={handleDecrement}>-</button>
            </div>
          </div>

          <div>
            <h1>Example two: complex (controlled-forms) </h1>
            <div>
              <h2>Use State Hook Test: </h2>
            </div>
            <div>
              <form action="submit">
                <input
                  placeholder="Enter First name"
                  onChange={(e) =>
                    setFormData({ ...formData, firstname: e.target.value })
                  }
                  required
                  type="text"
                />
                <input placeholder="Enter Last name"
                  onChange={(e) =>
                    setFormData({ ...formData, lastname: e.target.value })
                  }
                  required type="text" />

                <input placeholder="Enter Age"
                  onChange={(e) =>
                    setFormData({ ...formData, age: Number(e.target.value) })
                  }
                  required type="number" />
                {(formData.age < 18) && (
                  <span>You can not apply for this position as it doesnot meet to our minimum requirements</span>
                )}
                <button onClick={handleSubmit}>Submit</button>
              </form>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2>Use Effect Hook(already Done): </h2>
          </div>
        </section>


        <section>
          <div>
            <h2>UseRef Hook(): </h2>
          </div>
        </section>

      </div>
    </>
  );
};
export default HooksTest;
