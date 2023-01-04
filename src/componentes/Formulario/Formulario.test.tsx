import { render, screen} from "@testing-library/react";
import React from "react";
import Formulario from "../Formulario";


test('quando input está vazio, não add participantes',  () => {

  render(<Formulario />)
  // encontrar o input
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
  // encontar o btn
  const btn = screen.getByRole('button')
  // garantir que o input esteja no documento
  expect(input).toBeInTheDocument()
  // garantir que o btn esteja desabilitado
  expect(btn).toBeDisabled()
})