# Barbearia Estilo Brasil - Sistema de Agendamento Online ✂️

Sistema web moderno para agendamento de serviços em barbearias, com interface intuitiva e funcionalidades completas para clientes e administradores.

## 📌 Funcionalidades Principais

### **Agendamento Inteligente**
- **Seleção de Serviços**: Corte Social ou Barba Completa
- **Escolha de Barbeiros**: Especialistas com perfis detalhados
- **Calendário Interativo**:
  - Visualização mensal em português
  - Bloqueio de datas passadas
  - Destaque visual para data selecionada
- **Horários Dinâmicos**:
  - Geração automática de slots de 30min (09:00 às 18:00)
  - Bloqueio de horários já reservados
  - Feedback visual imediato

### **Gestão de Agendamentos**
- ✅ Confirmação com resumo detalhado
- 📅 Armazenamento persistente em localStorage
- 🔄 Atualização automática da lista de agendamentos
- ⏳ Diferenciação entre agendamentos futuros e concluídos

### **Experiência do Usuário**
- 🔍 Interface responsiva (mobile-first)
- ♿ Elementos acessíveis com ARIA labels
- 🎨 Feedback visual claro em cada etapa
- 🛡️ Tratamento de erros robusto

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** semântico
- **Tailwind CSS** para estilização
- **JavaScript** moderno (ES6+)
- **FullCalendar** para gestão de datas
- **LocalStorage** para persistência de dados

### Boas Práticas
- Padrão MVC com classe `Agendamento`
- Try/catch para tratamento de erros
- Clean Code e componentes reutilizáveis
- Ordenação cronológica automática

## 🚀 Como Executar

1. **Pré-requisitos**:
   - Navegador moderno (Chrome 90+, Firefox 88+)
   - Conexão internet (para CDNs)

2. **Instalação**:
```
git clone https://github.com/seu-usuario/barbearia-agendamento.git
cd barbearia-agendamento
```
**Execução:**

Abra index.html no navegador

(Opcional) Use extensão Live Server no VS Code

🗂️ Estrutura do Projeto
```
barbearia-agendamento/
├── index.html          # Estrutura principal
├── script.js           # Lógica da aplicação
├── style.css           # Estilos complementares
└── README.md           # Documentação
```
**💡 Como Usar**

**Seleção de Serviço:**

- Clique no serviço desejado

- Feedback visual com fundo azul claro

- Escolha do Barbeiro:

- Selecione entre os profissionais disponíveis

- Perfil com especialidade destacada

**Agendamento:**

- No calendário: clique em uma data futura

- Na grade de horários: escolha slot disponível

- Confira o resumo antes de confirmar

**Gestão:**

- Agendamentos salvos automaticamente

- Lista ordenada por data/hora

- Concluídos aparecem com estilo diferente

- localStorage.clear() para limpar tudo

**🌟 Recursos Avançados**

**javascript**
```
// Sistema de estado centralizado
class Agendamento {
  constructor() {
    this.state = {
      servico: null,
      barbeiro: null,
      data: null,
      horario: null
    };
  }
  
  // Métodos para gestão completa
  salvarAgendamentos() { ... }
  validarHorarios() { ... }
  gerarCalendario() { ... }
}
```
**📜 Licença**

MIT License - Livre para uso e modificação

**👨💻 Contribuição**

Faça fork do projeto

Crie sua branch: git checkout -b feature/nova-funcionalidade

Commit changes: git commit -m 'Add some feature'

Push: git push origin feature/nova-funcionalidade

Abra um Pull Request

Desenvolvido com ❤️ por [Anderson] | [https://www.linkedin.com/in/andersonjorgedesenvolvedorjavascriptjunior/]
Atualizado em: 15/07/2024