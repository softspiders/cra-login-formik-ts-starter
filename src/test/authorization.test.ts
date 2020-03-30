import {authorized} from "../components/authorization/SignIn";

test("Valid login, password" ,async () => {
  const query:boolean = await authorized("admin", "admin");
  expect(query).toBe(true);
});

test("Invalid login, correct password" ,async () => {
  const query:boolean = await authorized("Admin", "admin");
  expect(query).toBe(false);
});
test("Invalid password, valid login" ,async () => {
  const query:boolean = await authorized("Admin", "admin");
  expect(query).toBe(false);
});
test("Invalid password, login" ,async () => {
  const query:boolean = await authorized("Admin", "123");
  expect(query).toBe(false);
});