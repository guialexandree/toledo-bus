#  Toledo BUS 🚌

![image](https://user-images.githubusercontent.com/30730216/218342597-d60344d7-395a-47e1-b6bf-727205346257.png)

## Descrição MVP

Consulta dos itinerários e horários de ônibus de transporte público coletivo no município de Toledo/PR.<br>
Atualmente a empresa responsável pelo transporte é a Sorriso de Toledo, dessa forma a base de dados do app será gerada de acordo com as informações disponibilizados para o público no site https://editor.mobilibus.com/web/bus2you/2i0xq

## Requisitos MVP 

Código | Requisito | RN
--- | --- | --- |
RF01 | Deve ser possível realizar login através de um número de celular válido | RN01, RN02 |
RF02 | Deve ser possível filtrar por uma linha de ônibus | RN03, RN04 |
RF03 | Exibir detalhes da linha de ônibus selecionada | RN02 |
RF03 | Exibir itinerário da linha de ônibus selecionada | RN02, RN03 |
RF04 | Exibir rota da linha de ônibus no mapa |  |

Código | Regra de Negócio
--- | --- |
RN01 | Realizar validação via SMS |
RN02 | Solicitar número apenas no primeiro login |
RN03 | Referênte ao dia da semana selecionado |
RN04 | Armazear últimas buscas para cada usuário(localStorage) |

## Telas MVP: 

 [Figma](https://www.figma.com/file/D43gOVmoUQduwvA2CXaH3z/Toledo-BUS)

> Login

![image](https://user-images.githubusercontent.com/30730216/218601012-e94adc6b-48fa-4fad-862c-72264a01a70a.png)
![image](https://user-images.githubusercontent.com/30730216/218600995-0a26d12e-6ae5-46cc-9fea-03b7e8b5e52c.png)
![image](https://user-images.githubusercontent.com/30730216/218600982-5da3d70c-e4aa-4425-bb38-8e2a84060fb4.png)
![image](https://user-images.githubusercontent.com/30730216/218600974-c3774f82-2e66-40da-8743-5758465d4ad0.png)

> App

![image](https://user-images.githubusercontent.com/30730216/218795642-29ad10f6-e5bd-4345-b2fb-8b9840a384a4.png)
![image](https://user-images.githubusercontent.com/30730216/218602396-2ef500cf-b858-45ec-844c-9e94f0a4e6b0.png)
![image](https://user-images.githubusercontent.com/30730216/218602466-4106eaa0-a853-4731-aa96-580aa6a4c969.png)
