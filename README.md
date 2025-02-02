# Projeto de Agendamento para Barbearia

Este projeto é uma aplicação web para agendamento de serviços em uma barbearia. A aplicação permite que os usuários selecionem um serviço, escolham um barbeiro, selecionem uma data e horário, e confirmem o agendamento. Os agendamentos confirmados são exibidos em uma seção dedicada.

## Funcionalidades Implementadas

### 1. Seleção de Serviço
- Os usuários podem selecionar um serviço disponível na barbearia.
- A seleção é destacada visualmente.

### 2. Seleção de Barbeiro
- Os usuários podem selecionar um barbeiro disponível.
- A seleção é destacada visualmente.

### 3. Seleção de Data
- Um calendário interativo permite que os usuários escolham uma data para o agendamento.
- A data selecionada é destacada visualmente.
- O cursor do mouse muda para uma mãozinha ao passar sobre as datas, indicando que são clicáveis.

### 4. Seleção de Horário
- Os horários disponíveis são gerados dinamicamente com base na data selecionada.
- Os horários já agendados são desabilitados e exibidos com um estilo diferente para evitar conflitos de agendamento.

### 5. Confirmação de Agendamento
- Os usuários podem confirmar o agendamento após selecionar o serviço, barbeiro, data e horário.
- Os agendamentos confirmados são armazenados no `localStorage` para persistência.

### 6. Exibição de Agendamentos Confirmados
- Após confirmar um agendamento, um card é adicionado à seção "Agendamentos Confirmados" exibindo os detalhes do agendamento.
- A seção de agendamentos confirmados é atualizada dinamicamente.

### 7. Tratamento de Erros
- Blocos `try-catch` foram adicionados para capturar e lidar com exceções, fornecendo mensagens de erro úteis e melhorando a robustez da aplicação.

## Estrutura do Projeto

### HTML
- `index.html`: Contém a estrutura da página, incluindo seções para seleção de serviço, barbeiro, data, horário e exibição de agendamentos confirmados.

### CSS
- `style.css`: Contém estilos personalizados para a aplicação, incluindo estilos para destacar seleções e desabilitar horários já agendados.

### JavaScript
- `script.js`: Contém a lógica da aplicação, incluindo funções para seleção de serviço, barbeiro, data, horário, confirmação de agendamento e exibição de agendamentos confirmados.

## Como Executar o Projeto

1. Clone o repositório para sua máquina local.
2. Abra o arquivo `index.html` em um navegador web.
3. Utilize a interface para selecionar um serviço, barbeiro, data e horário.
4. Confirme o agendamento e veja os detalhes do agendamento confirmado na seção dedicada.

## Melhorias Futuras

- Implementar autenticação de usuários para permitir que cada usuário veja apenas seus próprios agendamentos.
- Adicionar a funcionalidade de cancelamento de agendamentos.
- Melhorar a interface do usuário com mais estilos e animações.
- Implementar notificações por e-mail para confirmar agendamentos e lembrar os usuários de seus compromissos.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
