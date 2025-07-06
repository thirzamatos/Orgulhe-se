export interface Pedido {
    id: string;
    cliente: string;
    data: string;
    status: 'entregue' | 'processando' | 'enviado' | 'cancelado';
    total: string;
}
