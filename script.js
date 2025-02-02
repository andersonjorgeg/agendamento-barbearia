class Agendamento {
  constructor() {
    this.agendamento = {
      servico: null,
      barbeiro: null,
      data: null,
      horario: null
    };
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.configurarCalendario();
      this.carregarAgendamentosConfirmados();
    });
  }

  salvarAgendamentos(agendamentos) {
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
  }

  recuperarAgendamentos() {
    return JSON.parse(localStorage.getItem('agendamentos') || '[]');
  }

  deletarAgendamentos() {
    localStorage.removeItem('agendamentos');
  }

  selecionarServico(servico, event) {
    try {
      this.agendamento.servico = servico;
      document.querySelectorAll('.servico-btn').forEach(btn => btn.classList.remove('bg-blue-100'));
      event.target.classList.add('bg-blue-100');
    } catch (error) {
      console.error('Erro ao selecionar serviço:', error);
      alert('Ocorreu um erro ao selecionar o serviço. Por favor, tente novamente.');
    }
  }

  selecionarBarbeiro(barbeiro, event) {
    try {
      this.agendamento.barbeiro = barbeiro;
      document.querySelectorAll('.barbeiro-btn').forEach(btn => btn.classList.remove('bg-blue-100'));
      event.target.classList.add('bg-blue-100');
    } catch (error) {
      console.error('Erro ao selecionar barbeiro:', error);
      alert('Ocorreu um erro ao selecionar o barbeiro. Por favor, tente novamente.');
    }
  }

  configurarCalendario() {
    try {
      const calendarioEl = document.getElementById('calendario');
      const calendario = new FullCalendar.Calendar(calendarioEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth'
        },
        locale: 'pt-br',
        buttonText: {
          today: 'Hoje',
          month: 'Mês'
        },
        allDayText: 'Dia Inteiro',
        firstDay: 1,
        dateClick: (info) => this.selecionarData(info),
        validRange: {
          start: new Date().toISOString().split('T')[0]
        }
      });
      calendario.render();
    } catch (error) {
      console.error('Erro ao configurar o calendário:', error);
      alert('Ocorreu um erro ao configurar o calendário. Por favor, recarregue a página.');
    }
  }

  selecionarData(info) {
    try {
      if (!this.agendamento.servico || !this.agendamento.barbeiro) {
        alert('Por favor, selecione primeiro um serviço e um barbeiro');
        return;
      }

      const selectedDate = new Date(info.dateStr + 'T00:00:00');
      this.agendamento.data = selectedDate.toISOString().split('T')[0];
      document.getElementById('horarios').classList.remove('hidden');
      document.getElementById('data-selecionada').textContent = selectedDate.toLocaleDateString('pt-BR');
      this.gerarHorarios();

      document.querySelectorAll('.fc-daygrid-day').forEach(dayCell => dayCell.classList.remove('selected-date'));
      info.dayEl.classList.add('selected-date');

      const feedbackEl = document.getElementById('feedback');
      if (feedbackEl) {
        feedbackEl.textContent = `Data selecionada: ${selectedDate.toLocaleDateString('pt-BR')}`;
      }
    } catch (error) {
      console.error('Erro ao clicar na data:', error);
      alert('Ocorreu um erro ao selecionar a data. Por favor, tente novamente.');
    }
  }

  gerarHorarios() {
    try {
      const container = document.getElementById('container-horarios');
      container.innerHTML = '';

      const horariosDisponiveis = [];
      const inicio = 9;
      const fim = 18;

      for (let hora = inicio; hora < fim; hora++) {
        horariosDisponiveis.push(`${hora.toString().padStart(2, '0')}:00`);
        horariosDisponiveis.push(`${hora.toString().padStart(2, '0')}:30`);
      }

      const agendamentos = this.recuperarAgendamentos();
      const agendamentosDoDia = agendamentos.filter(a => a.dataHora.startsWith(this.agendamento.data));

      horariosDisponiveis.forEach(horario => {
        const botao = document.createElement('button');
        botao.className = 'botao-horario p-2 border rounded hover:bg-blue-50';
        botao.textContent = horario;

        const horarioCompleto = `${this.agendamento.data}T${horario}:00`;
        if (agendamentosDoDia.some(a => a.dataHora === horarioCompleto)) {
          botao.disabled = true;
          botao.classList.add('bg-gray-300', 'cursor-not-allowed');
        } else {
          botao.onclick = (event) => this.selecionarHorario(horario, event);
        }

        container.appendChild(botao);
      });
    } catch (error) {
      console.error('Erro ao gerar horários:', error);
      alert('Ocorreu um erro ao gerar os horários. Por favor, tente novamente.');
    }
  }

  selecionarHorario(horario, event) {
    try {
      this.agendamento.horario = horario;
      document.querySelectorAll('.botao-horario').forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
      });
      event.target.classList.add('bg-blue-600', 'text-white');
      document.getElementById('horario-selecionado').textContent = horario;
      document.getElementById('confirmacao').classList.remove('hidden');

      document.getElementById('servico-selecionado').textContent = this.agendamento.servico;
      document.getElementById('barbeiro-selecionado').textContent = this.agendamento.barbeiro;
    } catch (error) {
      console.error('Erro ao selecionar horário:', error);
      alert('Ocorreu um erro ao selecionar o horário. Por favor, tente novamente.');
    }
  }

  confirmarAgendamento() {
    try {
      if (!this.agendamento.servico || !this.agendamento.barbeiro || !this.agendamento.data || !this.agendamento.horario) {
        alert('Por favor, preencha todos os campos antes de confirmar o agendamento.');
        return;
      }

      const dataCompleta = `${this.agendamento.data}T${this.agendamento.horario}:00`;
      const dadosAgendamento = {
        ...this.agendamento,
        dataHora: dataCompleta
      };

      let agendamentos = this.recuperarAgendamentos();
      if (!Array.isArray(agendamentos)) {
        agendamentos = [];
      }
      if (agendamentos.some(a => a.dataHora === dadosAgendamento.dataHora)) {
        alert('Este horário já está reservado. Por favor, escolha outro horário.');
        return;
      }

      agendamentos.push(dadosAgendamento);
      this.salvarAgendamentos(agendamentos);

      this.reiniciarFormulario();
      this.carregarAgendamentosConfirmados();
    } catch (error) {
      console.error('Erro ao confirmar agendamento:', error);
      alert('Ocorreu um erro ao confirmar o agendamento. Por favor, tente novamente.');
    }
  }

  adicionarAgendamentoConfirmado(agendamento) {
    const listaAgendamentos = document.getElementById('lista-agendamentos');
    const card = document.createElement('div');
    card.className = 'bg-white p-4 rounded-lg shadow';

    const agora = new Date();
    const dataHoraAgendamento = new Date(agendamento.dataHora);
    let titulo = 'Agendamento Confirmado';
    if (dataHoraAgendamento < agora) {
      card.classList.add('concluido');
      card.classList.remove('bg-white');
      titulo = 'Agendamento Concluído';
    }

    card.innerHTML = `
      <h3 class="text-lg font-bold mb-2">${titulo}</h3>
      <p><span class="font-semibold">Serviço:</span> ${agendamento.servico}</p>
      <p><span class="font-semibold">Barbeiro:</span> ${agendamento.barbeiro}</p>
      <p><span class="font-semibold">Data:</span> ${dataHoraAgendamento.toLocaleDateString('pt-BR')}</p>
      <p><span class="font-semibold">Horário:</span> ${agendamento.horario}</p>
    `;
    listaAgendamentos.appendChild(card);
  }

  carregarAgendamentosConfirmados() {
    const listaAgendamentos = document.getElementById('lista-agendamentos');
    listaAgendamentos.innerHTML = '';

    const agendamentos = this.recuperarAgendamentos();

    agendamentos.sort((a, b) => new Date(a.dataHora) - new Date(b.dataHora));

    agendamentos.forEach(agendamento => this.adicionarAgendamentoConfirmado(agendamento));
  }

  reiniciarFormulario() {
    try {
      this.agendamento = { servico: null, barbeiro: null, data: null, horario: null };
      document.querySelectorAll('.servico-btn, .barbeiro-btn, .botao-horario').forEach(btn => {
        btn.classList.remove('bg-blue-100', 'bg-blue-600', 'text-white');
      });
      document.getElementById('horarios').classList.add('hidden');
      document.getElementById('confirmacao').classList.add('hidden');
    } catch (error) {
      console.error('Erro ao reiniciar formulário:', error);
      alert('Ocorreu um erro ao reiniciar o formulário. Por favor, tente novamente.');
    }
  }
}

const agendamento = new Agendamento();