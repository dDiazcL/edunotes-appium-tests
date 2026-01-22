describe('Módulo Registro - EduNotes', () => {

  before(async () => {
    // Espera a que el input de correo esté visible
    const emailInput = await $('~register-email');
    await emailInput.waitForDisplayed({ timeout: 20000 });
  });

  it('Debe mostrar la pantalla de registro', async () => {
    const email = await $('~register-email');
    const password = await $('~register-password');
    const button = await $('~register-submit');

    await expect(email).toBeDisplayed();
    await expect(password).toBeDisplayed();
    await expect(button).toBeDisplayed();
  });

  it('Debe permitir registrar un usuario con datos válidos', async () => {
    const email = await $('~register-email');
    const password = await $('~register-password');
    const button = await $('~register-submit');

    await email.setValue('nuevo@mail.com');
    await password.setValue('123456');
    await button.click();

    // Pausa para observar el comportamiento real
    await browser.pause(2000);
  });

});
