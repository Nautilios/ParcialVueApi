<template>
  <footer>
    <div class="footer-bloques">
      <div class="bloque">
        <h3>Colchones Sueno Sano</h3>
        <p>Colchones ortopedicos, resortados y de espuma viscoelastica para toda la familia.</p>
      </div>
      <div class="bloque">
        <h3>Contacto</h3>
        <p>Telefono: 300 123 4567</p>
        <p>Correo: ventas@suenosano.com</p>
      </div>
      <div class="bloque">
        <h3>Horario</h3>
        <p>Lunes a Sabado</p>
        <p>8:00 a.m. a 6:00 p.m.</p>
      </div>
    </div>
    <p class="footer-copy">Colchones Sueno Sano - Todos los derechos reservados</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterColchones'
}
</script>

<style scoped>
footer {
  background: #0a2e2b;
  color: white;
  padding: 2rem;
  margin-top: 2rem;
}
.footer-bloques {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1300px;
  margin: 0 auto;
}
.bloque {
  flex: 1 1 220px;
}
.bloque h3 {
  color: #6bc9b3;
  margin-bottom: 0.6rem;
}
.bloque p {
  color: #ffffff;
  font-size: 0.9rem;
  line-height: 1.5;
}
.footer-copy {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #6bc9b3;
}
@media (max-width: 500px) {
  .footer-bloques {
    flex-direction: column;
    gap: 1.2rem;
  }
}
</style>
