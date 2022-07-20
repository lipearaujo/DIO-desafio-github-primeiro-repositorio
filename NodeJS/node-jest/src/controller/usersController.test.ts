import { UsersController } from "./usersController";
import { Request } from 'express';
import { makeMockResponse } from "../mocks/mockResponse";

describe('Users Controller', () => {
/*     //Exemplo
    it('Deve somar 1 + 1', () => {
        expect(1 + 1).toBe(2);
    }); 

    //Exemplo com AAA
    function soma(a: number, b: number){
        return a + b;
    };

    const resultado = soma(1, 2);

    expect(resultado).toBe(3);
    */

    //Teste para listar os usuarios
    const usersController = new UsersController();

    //criando o mock da Request
    const mockRequest = {} as Request;

    //criando o mock da Response
    const mockResponse = makeMockResponse()

    it('Deve listar os usuarios', () => {
        usersController.listarUsuarios(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(200);
    });

    it('Deve criar usuarios', ()=>{
        mockRequest.body = {
            name: 'Novo usuário'
        };

        usersController.criarUsuario(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({Mensagem: `Novo usuário foi adicionado`});
    });

    it('Nao deve criar usuário com nome em branco', ()=>{
        mockRequest.body = {
            name: ''
        };

        expect(mockResponse.state.status).toBe(403);
        expect(mockResponse.state.json).toMatchObject({Mensagem: `Não é possível adicionar usuários sem um nome`});
    });
});