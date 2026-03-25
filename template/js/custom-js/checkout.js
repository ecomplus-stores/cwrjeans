// Trava de segurança no servidor para impedir criação de pedidos com scripts
window.ecomCheckout.on('checkout', (data) => {
  const checkMalicious = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === 'string' && /<script|xss|inws\.cloud|["'><]/gi.test(obj[key])) {
        alert('Erro de segurança: Pedido bloqueado por conter caracteres inválidos.');
        window.location.href = '/';
        throw new Error('Tentativa de fraude bloqueada.');
      }
    }
  };
  checkMalicious(data.customer);
  checkMalicious(data.shipping_address);
});// Add your custom JavaScript for checkout here.
