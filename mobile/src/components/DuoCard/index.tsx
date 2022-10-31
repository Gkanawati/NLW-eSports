import { View, TouchableOpacity, Text } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

export interface DuoCardProps {
  id: string;
  name: string;
  hourEnd: string;
  hourStart: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label='Nome' value={data.name} />
      <DuoInfo label='Tempo de Jogo' value={`${data.yearsPlaying} anos`} />
      <DuoInfo
        label='Disponibilidade'
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} \u2022 ${data.hourEnd}`}
      />
      <DuoInfo
        label='Chamada de áudio'
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <Ionicons name='md-game-controller-outline' size={24} color='#FFF' />
        <Text style={styles.buttonText}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
