describe('Módulo Login - EduNotes', () => {

  before(async () => {
    // Espera a que cargue la pantalla de login
    const emailInput = await $('~login-email');
    await emailInput.waitForDisplayed({ timeout: 20000 });
  });

  it('Debe mostrar la pantalla de login', async () => {
    const email = await $('~login-email');
    const password = await $('~login-password');
    const button = await $('~login-submit');

    await expect(email).toBeDisplayed();
    await expect(password).toBeDisplayed();
    await expect(button).toBeDisplayed();
  });

  it('Debe permitir iniciar sesión con credenciales válidas', async () => {
    const email = await $('~login-email');
    const password = await $('~login-password');
    const button = await $('~login-submit');

    await email.setValue('test@gmail.com');
    await password.setValue('123456');
    await button.click();

    // Validación real: entra a la pantalla de notas
    const notesTitle = await $('~notes-title');
    await notesTitle.waitForDisplayed({ timeout: 10000 });
  });

});
