import { secondaryButtons } from "../lib/constants";
import Button from "./Button";

const ButtonGrop = () => {
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => {
        return (
          <Button key={text} type="secondary">
            {text}
          </Button>
        );
      })}
    </section>
  );
};

export default ButtonGrop;
