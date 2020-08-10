import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';


import warning from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passa é preencher esse formulário de inscrição."
            />
            <main>
                <fieldset>
                    <legend>Seus Dados </legend>
                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio"  label="Biografia"/>
                </fieldset>

                <fieldset>
                    <legend> Sobre a aula </legend>
                    <Select 
                    name="subject" 
                    label="Matéria" 
                    options={[
                        {value: 'Artes',label:'Artes'},
                        {value: 'Biologia',label:'Biologia'},
                        {value: 'Ciências',label:'Ciências'},
                        {value: 'Educação Fisica',label:'Educação Fisica'},
                        {value: 'Física',label:'Física'},
                        {value: 'Hitória',label:'Hitória'},
                        {value: 'Matemática',label:'Matemática'},
                        {value: 'Português',label:'Português'},
                        {value: 'Química',label:'Química'}

                    ]}
                    />
                    <Input name="cost" label="Custo da sua Hora por aula" />
                    <Input name="whatsapp" label="Whatsapp" />
                </fieldset>


                <footer>
                    <p>
                        <img src={warning} alt="Aviso Importante " />
                        importante! <br />
                        preencha todos os dados
                    </p>
                    <button type="button"> Salvar Cadastro</button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm