import { useRef } from 'react';

export const UserForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(
      `Name: ${nameRef.current?.value}\nAge: ${ageRef.current?.value}\nEmail: ${emailRef.current?.value}`
    );
  };

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', width: '400px' }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Name</label>
      <input id="name" placeholder="name" ref={nameRef} />
      <label htmlFor="age">Age</label>
      <input id="age" placeholder="age" type="number" ref={ageRef} />
      <label htmlFor="email">Email</label>
      <input id="email" placeholder="email" type="email" ref={emailRef} />
      <button type="submit">Submit</button>
    </form>
  );
};
