import { Tratamento } from "../../../../../entities/Tratamento";
import { nomesValores } from "./nomes";
import { queixas } from "./queixas";
import { addBusinessDays } from "date-fns";


function generateRandomDate(startDate: Date, endDate: Date) {
    return addBusinessDays(startDate, Math.floor(Math.random() * 30));
}

function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const tratamentosNefrologicosCancelados = <Tratamento[]>[];

let indexQueixas: number;
let indexNomes: number;

for (let i = 0; i < 24; i++) {

    indexQueixas = randomInteger(0, (queixas.length - 1));
    indexNomes = randomInteger(0, (nomesValores.length - 1));
    const tratamento = new Tratamento();
    tratamento.status = "Cancelado";
    tratamento.valor = nomesValores[indexNomes].valor;
    tratamento.nome = nomesValores[indexNomes].nome;
    tratamento.queixas = queixas[indexQueixas];
    tratamento.inicio = generateRandomDate(new Date(2023, 0, 1), new Date(2024, 1, 29));
    tratamento.termino = addBusinessDays(tratamento.inicio, Math.floor(Math.random() * 7) + 7);

    tratamentosNefrologicosCancelados.push(tratamento);
}

export default tratamentosNefrologicosCancelados;