describe('Módulo Login - EduNotes', () => {

  before(async () => {
    // Espera a que la app cargue el input de email
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

  it('Debe permitir ingresar credenciales válidas', async () => {
    const email = await $('~login-email');
    const password = await $('~login-password');
    const button = await $('~login-submit');

    await email.setValue('test@mail.com');
    await password.setValue('123456');
    await button.click();

    // Pequeña pausa para ver la acción en tiempo real
    await browser.pause(2000);
  });

});
