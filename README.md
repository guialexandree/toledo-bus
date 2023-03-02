#  Toledo BUS 🚌

![image](https://user-images.githubusercontent.com/30730216/218342597-d60344d7-395a-47e1-b6bf-727205346257.png)

# Descrição MVP

Consulta dos itinerários e horários de ônibus de transporte público coletivo no município de Toledo/PR.<br>
Atualmente a empresa responsável pelo transporte é a Sorriso de Toledo, dessa forma a base de dados do app será gerada de acordo com as informações disponibilizados para o público no site https://editor.mobilibus.com/web/bus2you/2i0xq

# Figma

 ![icons8-figma-48](https://user-images.githubusercontent.com/30730216/222578547-b6df6808-3de8-40bf-b3e4-6860a442675f.png) [Projeto Completo](https://www.figma.com/file/D43gOVmoUQduwvA2CXaH3z/Toledo-BUS) 🔗

![image](https://user-images.githubusercontent.com/30730216/218601012-e94adc6b-48fa-4fad-862c-72264a01a70a.png)
![image](https://user-images.githubusercontent.com/30730216/220222601-db9dcc77-fd58-475d-ae53-9e7af90a9c29.png)
![image](https://user-images.githubusercontent.com/30730216/222583185-b3232fcf-15a6-4c06-8521-0bdb6ed9a679.png)

# Requisitos V1 

Código | Requisito | RN
--- | --- | --- |
RF01 | Deve ser possível realizar login através da conta do Google | RN01 |
RF02 | Deve ser possível realizar login através da conta do Microsoft | RN01 |
RF03 | Deve ser possível filtrar por uma linha de ônibus e período | RN03, RN04 |
RF04 | Exibir itinerário da linha de ônibus selecionada | RN02, RN03 |

Código | Regra de Negócio
--- | --- |
RN01 | Login deve ficar válido por 60 dias |
RN02 | Authenticação JWT gravar em localStorage |
RN03 | Pode ser filtrado por hoje, amanhã ou data fixa |
RN04 | Armazenar últimas buscas do usuário(localStorage) |
