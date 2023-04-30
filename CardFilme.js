import {Text, View, Image, StyleSheet, TouchableOpacity} from "react-native";

const baseUrl = "https://api.otaviolube.com/api/filmes?populate=*";

export default function CardFilme({ filmes }){
    return (
        <View style = {styles.container}>
            <Image style = {styles.poster} source={{
                uri: baseUrl + filme.poster.data.atributes.url
            }}/>
            <Text>{filme.atributes.titulo}</Text>
            <Text>{filme.atributes.sinopse.substring(0,200)}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{
            backgroundColor: '#E0FFFF',
            margin: 15,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center'
    },
    imagem:{
        height: '200px',
        width: '150px',
        resizeMode: 'contain',
        marginBottom: 10

    },
    titulo:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10

    },
    sinopse:{
        marginBottom: 10,


    },
    button:{
        height: 40,
        width: '100%',
        backgroundColor: '#836FFF',
        alignItems:'center',
        justifyContent : 'center',

    },
    btnText:{
        fontSize: 20,
        fontWeight: 'bold',

    }


    }
)