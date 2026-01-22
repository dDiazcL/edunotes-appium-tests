describe('Módulo Gestión de Notas - EduNotes', () => {

  before(async () => {
    // Esperar que aparezca el botón flotante para agregar nota
    const addButton = await $('~notes-add');
    await addButton.waitForDisplayed({ timeout: 20000 });
  });

  it('Debe permitir crear una nueva nota', async () => {
    const addButton = await $('~notes-add');
    await addButton.click();

    // Pausa para ver la acción
    await browser.pause(2000);
  });

  it('Debe permitir marcar una nota como favorita', async () => {
    // Primer botón de favorito (nota existente)
    const favoriteButton = await $('~note-favorite');
    await favoriteButton.waitForDisplayed({ timeout: 10000 });
    await favoriteButton.click();

    await browser.pause(2000);
  });

});
