export class Contacto
{
  Nombre ='';
  Apellidos = '';
  Email = '';
  Conectado = false;

  constructor(nombre, apellidos, email, conectado){
    this.Nombre = nombre;
    this.Apellidos = apellidos;
    this.Email = email;
    this.Conectado =  conectado;
  }
}