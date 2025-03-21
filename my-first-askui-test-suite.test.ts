import { aui } from './helpers/askui-helper';

describe('jest with askui', () => {
  xit('should generate an (interactive) annotation', async () => {
    // For Windows users:
    // Use annotate() to create an annotated HTML file
    // of your screen that is saved under <project_root>/report
    await aui.annotate();

    // Uncomment for macOS and Linux
    // Delete the lines above to not trigger annotate()
    // await aui.annotateInteractively();
  });

  it('should perform calculation: 900 * 2 - 300 / 100', async () => {
    // Primero hacemos clic en la pestaña Calculator
    await aui
      .click()
      .text('Calculator')
      .exec();
    
    // Limpiamos con CE
    await aui
      .click()
      .button()
      .withText('CE')
      .exec();
    
    // Ingresamos 9
    await aui
      .click()
      .button()
      .withText('9')
      .exec();
    
    // Intentamos diferentes formas de seleccionar el botón 0
    // Opción 1: Usando containingText en lugar de withText
    await aui
      .click()
      .button()
      .withText('0')
      .exec();
    
    // Segundo 0
    await aui
      .click()
      .button()
      .withText('0')
      .exec();
    
    // Multiplicar
    await aui
      .click()
      .button()
      .withText('*')
      .exec();
    
    // Click en 2
    await aui
      .click()
      .button()
      .withText('2')
      .exec();
    
    // Igual
    await aui
      .click()
      .button()
      .withText('=')
      .exec();
    
    // Restar
    await aui
      .click()
      .button()
      .withText('-')
      .exec();
    
    // Ingresar 3
    await aui
      .click()
      .button()
      .withText('3')
      .exec();
    
    // Ingresar 0
    await aui
      .click()
      .button()
      .withText('0')
      .exec();
    
    // Ingresar otro 0
    await aui
      .click()
      .button()
      .withText('0')
      .exec();
    
    // Igual
    await aui
      .click()
      .button()
      .withText('=')
      .exec();
    
    // Dividir
    await aui
      .click()
      .button()
      .withText('/')
      .exec();
    
    // Ingresar 1
    await aui
      .click()
      .button()
      .withText('1')
      .exec();
    
    // Ingresar 0
    await aui
      .click()
      .button()
      .withText('0')
      .exec();
    
    // Ingresar otro 0
    await aui
      .click()
      .button()
      .withText('0')
      .exec();
    
    // Igual para obtener el resultado final
    await aui
      .click()
      .button()
      .withText('=')
      .exec();
  });
});