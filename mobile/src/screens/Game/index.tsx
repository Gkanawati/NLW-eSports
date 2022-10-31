import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { styles } from './styles';
import { GameParams } from '../../@types/@navigation';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);

  const route = useRoute();
  const navigation = useNavigation();
  const game = route.params as GameParams;

  useEffect(() => {
    fetch(`http://192.168.1.3:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setDuos(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>
        <Image
          source={{ uri: game.bannerUrl }}
          resizeMode='cover'
          style={styles.cover}
        />

        <Heading title={game.title} subtitle='Conecte-se e comece a jogar' />

        <FlatList
          data={duos}
          keyExtractor={(item) => item.id}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[
            duos.length > 0 ? styles.contentList : styles.emptyListContent,
          ]}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => {}} />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados ainda.
            </Text>
          )}
        />
      </SafeAreaView>
    </Background>
  );
}
