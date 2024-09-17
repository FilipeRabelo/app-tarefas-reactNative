
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';

import { FontAwesome }  from '@expo/vector-icons';
import styles           from './styles/AppStyles';
import Tarefa           from "./src/Tarefa"; 

export default function App() {

  const [tarefa, setTarefa] = useState('');  // TUDO Q FOR DIGITADO NO INPUT VAI VIM PARA A useState
  const [list, setListe]    = useState([])      // enviando para a view list

  function handlerAdd(){
    if(tarefa === ''){
      alert("Digite sua Tarefa");
      return;
    }

    const dados = {
      key: Date.now(),   //para pegar a data de hoje
      item: tarefa
    }

    // pegando todos os item ja digitados e add os novos
    setListe(oldArray => [dados, ...oldArray]);
    setTarefa('') // voltando o iput ao vazio
  }

  // DELETAR           // ITEM É o NOME DA TAREFA

  function handleDelete(item){      // prciso passar o item q quero deletar
    // console.log(item)
    let filtroItem = list.filter((tarefa) => {
      return(tarefa.item !== item)  // vou retorna todas as terefas menos a que foi clicada para ser excluida
    })

    setListe(filtroItem)  // devolvendo a lista atualizada sem a q foi excluida
    alert(`Tarefa ${item} excuida com sucesso... `)
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Tarefas</Text>

      <View style={styles.containerInput}>

        <TextInput
          placeholder="Digite sua tarefa..."
          style={styles.input}
          value={tarefa}                               // atrelando o useState ao input
          onChangeText={ (text) => setTarefa(text)}    // toda vez q for digitado algo o onChangeText vai ser ativado
        />

        <TouchableOpacity 
          style={styles.buttonAdd}
          onPress={handlerAdd}
        >
          <FontAwesome name="plus" size={20} color={'#DC143C'} />
        </TouchableOpacity>

      </View>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => item.key }          // recebendo e  passando o key.item = id da lista
        // qual componente vai ser renderizado
        renderItem={({ item }) => <Tarefa data={item} deleteItem={() => handleDelete(item.item) } />}      
      />

    </View>
  )
}