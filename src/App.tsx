import { useForm } from "react-hook-form";
import TextInput from "./core/components/TextInput";

type FormData = {
  firstName: string;
  lastName: string;
};

function App() {
  const { register } = useForm<FormData>();
  return (
    <div className="flex gap-1 p-2">
      <TextInput
        name="firstName"
        placeholder="First Name"
        register={register}
      />
      <TextInput name="lastName" placeholder="Last Name" register={register} />
    </div>
  );
}

export default App;
