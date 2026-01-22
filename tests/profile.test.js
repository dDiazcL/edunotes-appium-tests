describe('Módulo Perfil de Usuario - EduNotes', () => {

  before(async () => {
    // Esperar que cargue la pantalla de perfil (botón editar)
    const editButton = await $('~profile-edit');
    await editButton.waitForDisplayed({ timeout: 20000 });
  });

  it('Debe permitir activar y desactivar el modo edición', async () => {
    const editButton = await $('~profile-edit');

    // Activar edición
    await editButton.click();
    await browser.pause(1500);

    // Verificar que aparezca el botón guardar
    const saveButton = await $('~profile-save');
    await expect(saveButton).toBeDisplayed();

    // Desactivar edición
    await editButton.click();
    await browser.pause(1500);
  });

  it('Debe permitir guardar cambios en el perfil', async () => {
    const editButton = await $('~profile-edit');
    await editButton.click();

    const nameInput = await $('~profile-name');
    await nameInput.waitForDisplayed({ timeout: 10000 });
    await nameInput.setValue('Usuario Prueba');

    const saveButton = await $('~profile-save');
    await saveButton.click();

    // Pausa para observar guardado en tiempo real
    await browser.pause(2000);
  });

});
