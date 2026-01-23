describe('Módulo Perfil - EduNotes', () => {

  before(async () => {
    const profileTitle = await $('~profile-title');
    await profileTitle.waitForDisplayed({ timeout: 20000 });
  });

  it('Debe mostrar la pantalla de perfil', async () => {
    const name = await $('~profile-name');
    const email = await $('~profile-email');

    await expect(name).toBeDisplayed();
    await expect(email).toBeDisplayed();
  });

  it('Debe permitir activar y cancelar edición de perfil', async () => {
    const editButton = await $('~profile-edit');
    await editButton.click();

    const saveButton = await $('~profile-save');
    await expect(saveButton).toBeDisplayed();

    // Cancelar edición
    await editButton.click();
    await expect(saveButton).not.toBeDisplayed();
  });

});
