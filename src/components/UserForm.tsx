export const UserForm = () => {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', width: '400px' }}>
      <input placeholder="name" />
      <input placeholder="age" />
      <input placeholder="email" />
      <button type="submit">Submit</button>
    </form>
  );
};
