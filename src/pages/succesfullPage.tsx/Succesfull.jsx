import { ComprarHeader } from "../../components/header/header";

const PaymentSuccessPage: React.FC = () => {
  return (
    <div>
      <ComprarHeader />
      <h1>Pago Exitoso</h1>
      <p>Tu pago se ha procesado exitosamente.</p>
      <p>¡Gracias por tu compra!</p>
    </div>
  );
};

export default PaymentSuccessPage;