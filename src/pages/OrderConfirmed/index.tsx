import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import confirmedOrderIllustration from "../../assets/confirmed-order.svg";
import { InfoWithIcon } from "../../components/infoWithicon";
import { RegularText, TitleText } from "../../components/Typography";
import { OrderData } from "../CompleteOrder";
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";

interface LocationState {
  state: OrderData;
}

export function OrderConfirmedPage() {
  const { colors } = useTheme();

  const { state } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [navigate, state]);

  if (!state) return <></>;

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <RegularText>
                Entrega em <strong>{state.street}</strong>, {state.number}
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                {paymentMethods[state.paymentMethod as keyof typeof paymentMethods]?.label && (
                  <strong>{paymentMethods[state.paymentMethod as keyof typeof paymentMethods].label}</strong>
                )}
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} alt="Ilustração de um café sendo preparado" />
      </section>
    </OrderConfirmedContainer>
  );
}


