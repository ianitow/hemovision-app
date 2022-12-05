import { View, Text, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { colors } from 'src/theme/colors';
import { Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ProgressBar } from 'src/components/progress-bar/ProgressBar';
import { FormSurvey } from 'src/components/form-survey/FormSurvey';

export function PostSurvey({ overlay = false }) {
  const [usersOptions, setUserOptions] = useState([
    { id: 'NEU', name: 'Neutrófilo', votes: 2443 },
    { id: 'LIN', name: 'Linfócito', votes: 567 },
    { id: 'BAS', name: 'Basófilo', votes: 234 },
    { id: 'EOS', name: 'Eosinófilo', votes: 123 },
    { id: 'MON', name: 'Monócito', votes: 55 },
  ]);
  const [artificialOption, setArtificialOption] = useState({
    id: 'NEU',
    name: 'Neutrófilo',
    total: 99.4,
  });
  const total = usersOptions.reduce((acc, item) => acc + item.votes, 0);
  return (
    <View
      className="flex  h-full border rounded relative "
      style={{ borderColor: colors.boxBackground }}
    >
      <FormSurvey
        artificialOptions={artificialOption}
        usersOptions={usersOptions}
        totalVotesSurvey={total}
      />
    </View>
  );
}
