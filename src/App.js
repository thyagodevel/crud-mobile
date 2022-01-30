import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,

} from 'react-native';

import styles from './styles/styles';

let data = [
  {
    id: 'vhsdkjs',
    title: 'teste 1',
    name: 'Fulano',
    tel: '93848573',
    email: 'e9jdei@gmail.com'
  },
  {
    id: 'soighj',
    title: 'teste 2',
    name: 'Fulano',
    tel: '93848573',
    email: 'e9jdei@gmail.com'
  },
  {
    id: 'woeisjc',
    title: 'teste 3',
    name: 'Fulano',
    tel: '93848573',
    email: 'e9jdei@gmail.com'
  },
  {
    id: 'woeisjc',
    title: 'teste 3',
    name: 'Fulano',
    tel: '93848573',
    email: 'e9jdei@gmail.com'
  },
  {
    id: 'woeisjc',
    title: 'teste 3',
    name: 'Fulano',
    tel: '93848573',
    email: 'e9jdei@gmail.com'
  },
];

const Item = ({ name, tel, email }) => (
  <View style={styles.containerLista} >
    <View style={styles.containerTituloLista} >
      <Text style={styles.lista} >Nome: </Text>
      <Text style={styles.lista} >{name}</Text>
    </View>
    <View style={styles.containerTituloLista} >
      <Text style={styles.lista} >Telefone: </Text>
      <Text style={styles.lista} >{tel}</Text>
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

function App(){

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      name={item.name}
      tel={item.tel}
      email={item.email}
    />
  );

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
            />
          </View>
          <View style={styles.containerAdicionarInfos} >
            <Text style={styles.tituloAdicionar} >Telefone</Text>
            <TextInput
              style={styles.input}
              placeholder='Digite o telefone'
            />
          </View>
          <View style={styles.containerAdicionarInfos} >
            <Text style={styles.tituloAdicionar} >E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder='Digite o e-mail'
            />
          </View>
        </View>
        <TouchableOpacity style={styles.botaoAdicionar} >
          <View  >
            <Text style={[styles.lista, { color: '#ffffff', textAlign: 'center' }]} >Salvar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerConteudo} >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;