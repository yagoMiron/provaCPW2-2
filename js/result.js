const $ = document.querySelector.bind(document);
const fraseResultado = $("#result-frase");
const campoEmprestimo = $("#result-emprestimo");
const campoParcelas = $("#result-parcela");
const campoJuros = $("#result-juros");
const campoValorReal = $("#result-real-valor");
const campoValorParcela = $("#result-parcela-valor");

const search = window.location.search;
const parans = new URLSearchParams(search);

const emprestimo = parans.get("emprestimo");
const juros = parans.get("juros");
const parcelas = parans.get("parcelas");

const { valorReal, valorParcela } = calculaEmprestimo(
  emprestimo,
  juros,
  parcelas
);

fraseResultado.innerText = `${parcelas}x de ${valorParcela}R$`;
campoEmprestimo.innerText = Number(emprestimo).toFixed(2) + "R$";
campoParcelas.innerText = parcelas;
campoJuros.innerText = juros + "%";
campoValorReal.innerText = valorReal + "R$";
campoValorParcela.innerText = valorParcela + "R$";

//--------------------------------------------------------------------------------

function calculaEmprestimo(valorEmprestado, taxaJuros, nroParcelas) {
  const valorReal = (
    valorEmprestado *
    (1 + (taxaJuros / 100) * nroParcelas)
  ).toFixed(2);
  const valorParcela = (valorReal / nroParcelas).toFixed(2);

  return { valorReal, valorParcela };
}
