#  Toledo BUS 🚌

![image](https://user-images.githubusercontent.com/30730216/218342597-d60344d7-395a-47e1-b6bf-727205346257.png)

# Descrição MVP

Consulta dos itinerários e horários de ônibus de transporte público coletivo no município de Toledo/PR.<br>
Atualmente a empresa responsável pelo transporte é a Sorriso de Toledo, dessa forma a base de dados do app será gerada de acordo com as informações disponibilizados para o público no site https://editor.mobilibus.com/web/bus2you/2i0xq

# Figma

 ![icons8-figma-48](https://user-images.githubusercontent.com/30730216/222578547-b6df6808-3de8-40bf-b3e4-6860a442675f.png) [Projeto Completo](https://www.figma.com/file/D43gOVmoUQduwvA2CXaH3z/Toledo-BUS) 🔗

> Splash

![image](https://user-images.githubusercontent.com/30730216/222873203-f302cb96-24b0-4568-a364-6342d4272bf7.png)

> Login

![image](https://user-images.githubusercontent.com/30730216/222873337-177b20e4-903e-4c59-811a-f34f2fde4a48.png)

> Login PopUp

![image](https://user-images.githubusercontent.com/30730216/222873440-59e38617-422e-42f6-8e49-aff83af1512c.png)

> Home

![image](https://user-images.githubusercontent.com/30730216/222873761-f07c224f-1464-4b5a-8053-b90472e51ff0.png)

# Requisitos V1 

Código | Requisito | RN
--- | --- | --- |
RF01 | Deve ser possível realizar login através da conta do Google | RN01 |
RF02 | Deve ser possível realizar login através da conta do Microsoft | RN01 |
RF03 | Deve ser possível filtrar por uma linha de ônibus e período | RN03, RN04 |
RF04 | Exibir horários da linha de ônibus selecionada |  |
RF06 | Exibir itinerário da linha de ônibus |  |
RF05 | Exibir últimas buscas do usuário | RN05 |

Código | Regra de Negócio
--- | --- |
RN01 | Login deve ficar válido por 60 dias |
RN02 | Authenticação JWT gravar em localStorage |
RN03 | Pode ser filtrado por hoje, amanhã ou data fixa |
RN04 | Armazenar últimas buscas do usuário(localStorage) |
RN05 | Deve exibir apenas as quatro últimas buscas |
