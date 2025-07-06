import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pedido } from '../../interfaces/pedido';

@Component({
  selector: 'app-perfil-vend',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './perfil-vend.component.html',
  styleUrl: './perfil-vend.component.css'
})
export class PerfilVendComponent {

  aba: string = 'dashboard';

  buscaPedido: string = '';

  pedidos: Pedido[] = [
    { id: '#123456', cliente: 'João Silva', data: '03/07/2025', status: 'entregue', total: 'R$ 150,00' },
    { id: '#123457', cliente: 'Maria Souza', data: '02/07/2025', status: 'processando', total: 'R$ 89,90' },
    { id: '#123458', cliente: 'Carlos Lima', data: '01/07/2025', status: 'enviado', total: 'R$ 210,00' },
    { id: '#123459', cliente: 'Fernanda Dias', data: '30/06/2025', status: 'cancelado', total: 'R$ 0,00' }
  ];

  get pedidosFiltrados() {
    const termo = this.buscaPedido.trim().toLowerCase();
    if (!termo) return this.pedidos;
    return this.pedidos.filter(p =>
      p.cliente.toLowerCase().includes(termo) ||
      p.id.toLowerCase().includes(termo)
    );
  }


  meusProdutos = [
  {
    nome: 'Camiseta Orgulho',
    imagem: 'assets/camisa.png',
    estoque: 12,
    status: 'ativo'
  },
  {
    nome: 'Pulseira Colorida',
    imagem: 'assets/amy.png',
    estoque: 0,
    status: 'desativado'
  },
  {
    nome: 'Poster LGBT+',
    imagem: 'assets/avatar.jpg',
    estoque: 5,
    status: 'ativo'
  }
  // Adicione mais produtos conforme necessário
];

excluirProduto(produto: any) {
  this.meusProdutos = this.meusProdutos.filter(p => p !== produto);
  this.atualizarStatusProdutos();
}


atualizarStatusProdutos() {
  this.meusProdutos.forEach(produto => {
    if (produto.estoque === 0) {
      produto.status = 'desativado';
    } else if (produto.status === 'desativado' && produto.estoque > 0) {
      produto.status = 'ativo';
    }
  });
}


constructor() {
  this.atualizarStatusProdutos();
}



dashboard = {
  vendasHoje: 1200,
  vendasOntem: 1000,
  pedidosHoje: 15,
  pedidosOntem: 10,
  conversaoHoje: 0.25, // 25%
  conversaoOntem: 0.20 // 20%
};

get variacaoVendas() {
  const { vendasHoje, vendasOntem } = this.dashboard;
  if (vendasOntem === 0) return 100;
  return ((vendasHoje - vendasOntem) / vendasOntem) * 100;
}

get variacaoPedidos() {
  const { pedidosHoje, pedidosOntem } = this.dashboard;
  if (pedidosOntem === 0) return 100;
  return ((pedidosHoje - pedidosOntem) / pedidosOntem) * 100;
}

get variacaoConversao() {
  const { conversaoHoje, conversaoOntem } = this.dashboard;
  if (conversaoOntem === 0) return 100;
  return ((conversaoHoje - conversaoOntem) / conversaoOntem) * 100;

}

}
