import MainA from './MainA'
import MainB from './MainB'

function Main() {
    const variantKey = "variant";
    let variant = localStorage.getItem(variantKey);
  
    if (!variant) {
      variant = Math.random() > 0.5 ? "A" : "B";
      localStorage.setItem(variantKey, variant);
    }
    return (
      <>
        {variant === "A" ? <MainA /> : <MainB />}
      </>
    );
}
export default Main;
