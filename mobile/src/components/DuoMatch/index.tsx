import React, { useState } from 'react';
import {
  View,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  ActivityIndicator,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCopping, setIsCopping] = useState(false);

  async function handleCopyDiscordUserToClipboard() {
    setIsCopping(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert('Discord copiado!', 'Usuário copiado para você colar.');
    setIsCopping(false);
    onClose();
  }

  return (
    <Modal transparent statusBarTranslucent animationType='fade' {...rest}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.container}>
          <TouchableOpacity activeOpacity={1} style={styles.content}>
            <TouchableOpacity style={styles.closeIcon}>
              <MaterialIcons
                onPress={onClose}
                name='close'
                size={20}
                color={THEME.COLORS.CAPTION_500}
              />
            </TouchableOpacity>

            <FontAwesome5
              name='check-circle'
              size={64}
              color={THEME.COLORS.SUCCESS}
            />

            <Heading
              title="Let's Play"
              subtitle='Agora é so começar a jogar!'
              style={{ alignItems: 'center', marginTop: 24 }}
            />
            <Text style={styles.label}>Adicione no discord</Text>

            <TouchableOpacity
              style={styles.discordButton}
              onPress={handleCopyDiscordUserToClipboard}
              disabled={isCopping}
            >
              <Text style={styles.discord}>
                {isCopping ? (
                  <ActivityIndicator color={THEME.COLORS.PRIMARY} />
                ) : (
                  discord
                )}
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
