"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "./language-provider";

const purities = [
  { label: "24K", factor: 0.999 },
  { label: "22K", factor: 0.916 },
  { label: "18K", factor: 0.75 },
  { label: "14K", factor: 0.585 },
];

export function PurityCalculator() {
  const { t } = useLanguage();
  const [weight, setWeight] = useState(10);
  const [purityIndex, setPurityIndex] = useState(1);
  const [rate, setRate] = useState(7300);

  const { fineWeight, value } = useMemo(() => {
    const factor = purities[purityIndex].factor;
    const fine = weight * factor;
    return { fineWeight: fine, value: fine * rate };
  }, [weight, purityIndex, rate]);

  return (
    <div className="purity-calculator reveal">
      <div className="purity-calculator-copy">
        <p className="eyebrow">{t.home.calculator.title}</p>
        <p>{t.home.calculator.sub}</p>
      </div>
      <div className="purity-calculator-card">
        <div className="purity-field">
          <label htmlFor="calc-weight">{t.home.calculator.weightLabel}</label>
          <input
            id="calc-weight"
            inputMode="decimal"
            min={0}
            onChange={(event) => setWeight(Number(event.target.value) || 0)}
            step={0.01}
            type="number"
            value={weight}
          />
        </div>
        <div className="purity-field">
          <label htmlFor="calc-purity">{t.home.calculator.purityLabel}</label>
          <select id="calc-purity" onChange={(event) => setPurityIndex(Number(event.target.value))} value={purityIndex}>
            {purities.map((purity, index) => (
              <option key={purity.label} value={index}>{purity.label}</option>
            ))}
          </select>
        </div>
        <div className="purity-field">
          <label htmlFor="calc-rate">{t.home.calculator.rateLabel}</label>
          <input
            id="calc-rate"
            inputMode="decimal"
            min={0}
            onChange={(event) => setRate(Number(event.target.value) || 0)}
            step={1}
            type="number"
            value={rate}
          />
        </div>
        <div className="purity-result">
          <span>{t.home.calculator.resultLabel}</span>
          <strong>₹{value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</strong>
          <small>{fineWeight.toLocaleString("en-IN", { maximumFractionDigits: 3 })} g fine</small>
        </div>
      </div>
      <p className="purity-hint">{t.home.calculator.hint}</p>
    </div>
  );
}
