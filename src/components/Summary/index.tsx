import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useSummary } from "../../hooks/useSummary";
import { priceFormtter } from "../../utils/Formartter";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  const summary = useSummary();
  
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormtter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormtter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormtter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}