import getRelativeTime from './getRelativeTime';

describe('Função getRelativeTime deve retornar o tempo entre datas corretamente', () => {
  it('quando a data do último push for da ordem de segundos', () => {
    const phrase = getRelativeTime('2022-08-06T01:17:19.544Z', 'pt', '2022-08-06T01:17:29.544Z');

    expect(phrase).toBe('há 10 segundos');
  });
  it('quando a data do último push for da ordem de minutos', () => {
    const phrase = getRelativeTime('2022-08-06T01:17:19.544Z', 'pt', '2022-08-06T01:19:29.544Z');

    expect(phrase).toBe('há 2 minutos');
  });
  it('quando a data do último push for da ordem de dias', () => {
    const phrase = getRelativeTime('2022-08-06T01:17:19.544Z', 'pt', '2022-08-16T01:17:29.544Z');

    expect(phrase).toBe('semana passada');
  });
});
