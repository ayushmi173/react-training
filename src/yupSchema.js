import { object, string, boolean } from "yup";

export async function triggerSchema() {
  const mockObject = {
    email: "ayush@gmail.com",
    password: "password",
    acceptTermsAndConditions: true,
  };

  const userSchema = object().shape({
    email: string().min(8).email("Must be a valid email"),
    password: string().required(),
    acceptTermsAndConditions: boolean().required().oneOf([true]),
  });

  try {
    const user = await userSchema.validate(mockObject);
    console.log("user", user);
  } catch (err) {
    console.log(JSON.stringify(err));
  }
}
