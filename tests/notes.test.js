describe('Módulo Notas - EduNotes', () => {

  before(async () => {
    const notesTitle = await $('~notes-title');
    await notesTitle.waitForDisplayed({ timeout: 20000 });
  });

  it('Debe mostrar la pantalla de notas', async () => {
    const title = await $('~notes-title');
    const addButton = await $('~notes-add');

    await expect(title).toBeDisplayed();
    await expect(addButton).toBeDisplayed();
  });

  it('Debe permitir agregar una nueva nota', async () => {
    const addButton = await $('~notes-add');
    await addButton.click();

    const modalTitle = await $('~note-title-input');
    await modalTitle.waitForDisplayed({ timeout: 10000 });

    await modalTitle.setValue('Nota Appium');
    const saveButton = await $('~note-save');
    await saveButton.click();

    const noteItem = await $('~note-item-0');
    await expect(noteItem).toBeDisplayed();
  });

});
