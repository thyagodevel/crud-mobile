import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles/styles';
import api from './services/api';
import data from './testeDados';

function App(){
  const [clientes, setClientes] = useState([]);
  const [nomeCliente, setNomeCliente] = useState('');
  const [phoneCliente, setPhoneCliente] = useState('');
  const [emailCliente, setEmailCliente] = useState('');

  api.get('/customers').then((response) => {
    setClientes(response.data);
  });

  function salvarCliente(){
    api.post('/customers', {
      name: `${nomeCliente}`,
      phone: `${phoneCliente}`,
      email: `${emailCliente}`
    }).then((response) => console.log(response.data));
  }

  function ComponentCliente({ name, phone, email }){
    return (
      <View style={styles.containerLista} >
        <View style={styles.containerTituloLista} >
          <Text style={styles.lista} >Nome: </Text>
          <Text style={styles.lista} >{name}</Text>
        </View>
        <View style={styles.containerTituloLista} >
          <Text style={styles.lista} >Telefone: </Text>
          <Text style={styles.lista} >{phone}</Text>
        </View>
        <View style={styles.containerTituloLista} >
          <Text style={styles.lista} >E-mail: </Text>
          <Text style={styles.lista} >{email}</Text>
        </View>
        <View style={styles.containerOpcoes} >
          <TouchableOpacity style={[styles.botao, { backgroundColor: 'blue' }]} >
            <View>
              <Text style={[styles.lista, { color: '#ffffff' }]} >Editar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, { backgroundColor: 'red' }]} >
            <View>
              <Text style={[styles.lista, { color: '#ffffff' }]} >Excluir</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );

  };

  return(
    <SafeAreaView style={styles.container} >
      <View style={styles.containerTitulo} >
        <Text style={styles.titulo} >cadastro de clientes</Text>
      </View>
      <View style={styles.containerAdicionar} >
        <View>
          <View style={styles.containerAdicionarInfos} >
            <Text style={styles.tituloAdicionar} >Nome</Text>
            <TextInput
              style={styles.input}
              placeholder='Digite o nome'
              placeholderTextColor={'#ffffff'}
              onChangeText={setNomeCliente}
            />
          </View>
          <View style={styles.containerAdicionarInfos} >
            <Text style={styles.tituloAdicionar} >Telefone</Text>
            <TextInput
              style={styles.input}
              placeholder='Digite o telefone'
              placeholderTextColor={'#ffffff'}
              onChangeText={setPhoneCliente}
            />
          </View>
          <View style={styles.containerAdicionarInfos} >
            <Text style={styles.tituloAdicionar} >E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder='Digite o e-mail'
              placeholderTextColor={'#ffffff'}
              onChangeText={setEmailCliente}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={salvarCliente}
        >
          <View  >
            <Text style={[styles.lista, { color: '#ffffff', textAlign: 'center' }]} >Salvar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerConteudo} >
        <FlatList
          data={clientes}
          renderItem={({ item }) => <ComponentCliente name={item.name} phone={item.phone} email={item.email} /> }
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;