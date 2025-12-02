import SignupInputBox from './SignupInputBox';

interface SignupStepOneProps {
  name: string;
  onChange: (value: string) => void;
}

const SignupStepOne = ({ name, onChange }: SignupStepOneProps) => {
  return <SignupInputBox label="이름" value={name} onChange={onChange} placeholder="ex) 홍길동" />;
};

export default SignupStepOne;
