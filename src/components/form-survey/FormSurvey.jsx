import { View, Text } from 'react-native';
import React from 'react';
import { ProgressBar } from '../progress-bar/ProgressBar';
import { colors } from 'src/theme/colors';
import { HText } from '../h-text/Text';

export function FormSurvey({
  backgroundColor = colors.secondBackground,
  usersOptions,
  showPercentage = true,
  totalVotesSurvey,
}) {
  const totalVotesInPercentage = (votes) => Number(((votes / totalVotesSurvey) * 100).toFixed(2));
  return (
    <View className="" style={{ backgroundColor }}>
      <View className="mb-2">
        <HText className="font-semibold">Classificação da Inteligência Arficial</HText>
        <ProgressBar
          containerClass="mb-1 bg-red-500"
          textClass="text-white"
          width={100}
          showPercentage
          text={'Neutrófilo'}
        ></ProgressBar>
      </View>
      {usersOptions && (
        <View>
          <HText className="font-semibold ">Classificação dos usuários</HText>

          {usersOptions.map(({ name, id, votes }) => (
            <ProgressBar
              showPercentage={true}
              width={totalVotesInPercentage(votes)}
              key={id}
              containerClass="mb-1 bg-red-500"
              progressBarColor={colors.info}
              text={name}
            ></ProgressBar>
          ))}
        </View>
      )}
    </View>
  );
}
