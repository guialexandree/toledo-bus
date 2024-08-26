#  Toledo BUS 🚌

![image](https://user-images.githubusercontent.com/30730216/218342597-d60344d7-395a-47e1-b6bf-727205346257.png)

# Descrição

Consulta dos itinerários e horários de ônibus de transporte público coletivo no município de Toledo/PR.<br>
Projeto para consolidar processos de desenvolvimento que estou estudando no momento.
A empresa que altualmente é responsável pelo transporte de Toledo é a [`Sorriso de Toledo`](https://www.sorrisodetoledo.com.br/), 
dessa forma os dados iniciais para a base de dados do app foram geradas com base nos horários disponibilizados no momento da extração.
As informações de linhas e horários são apenas para fins de teste de app, não devem ser consideradas reais. 

Link de extração de horários, linhas e itinerários: <https://editor.mobilibus.com/web/bus2you/2i0xq>

# Requisitos 

Código | Requisito | RN
--- | --- | --- |
RF01 | Deve ser possível realizar login através da conta do Google | RN01, RN02 |
RF02 | Deve ser possível realizar login através da conta do Microsoft | RN01, RN02 |
RF04 | Deve ser possível filtrar por uma linha de ônibus e período | RN03, RN04, RN07 |
RF05 | Na tela inicial deve exibir as últimas buscas do usuário | RN04 | RN05
RF06 | Exibir horários da linha de ônibus selecionada | RN06 |

Código | Regra de Negócio
--- | --- |
RN01 | Login deve ficar válido por 60 dias, após vencimento o login deve ser solicitado |
RN02 | Authenticação JWT gravar em cookies |
RN03 | Disponibilizar filtros: hoje, amanhã ou data informada |
RN04 | Armazenar as buscas de linha do usuário em localStorage |
RN05 | Deve exibir apenas as quatro últimas buscas |
RN06 | Deve ser exibido em destaque o proximo horário a sair na linha selecionada |
RN07 | O botão de busca deve ficar inativado até que seja informado linha e período |
RN08 | Quando na troca de páginas ocorrer alteração da cor background deve realizar transição com animação fade | 

# Figma

 ![icons8-figma-48](https://user-images.githubusercontent.com/30730216/222578547-b6df6808-3de8-40bf-b3e4-6860a442675f.png) [Projeto Completo](https://www.figma.com/file/D43gOVmoUQduwvA2CXaH3z/Toledo-BUS) 🔗

> Splash

![image](https://user-images.githubusercontent.com/30730216/227804574-66a397f8-9c2f-4001-ae32-b3cd9d989b14.png)

> Login

![image](https://user-images.githubusercontent.com/30730216/227804606-1e342cb9-bc61-4cce-86ff-3e5b4b58ed22.png)

> Login PopUp

![image](https://user-images.githubusercontent.com/30730216/227804620-38e4438a-db19-4acc-9185-660658b5843a.png)

> Home

![image](https://user-images.githubusercontent.com/30730216/227804634-488d75cd-69a0-498c-9256-bb3832d29160.png)

> Line View

![image](https://user-images.githubusercontent.com/30730216/227804664-992925cd-46c7-44a0-b411-ba94d6ea47bb.png)

