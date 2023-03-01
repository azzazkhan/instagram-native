import { FC } from 'react';
import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserIcon, ChevronDownIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline';

const HomeScreen: FC = () => {
    return (
        <SafeAreaView>
            <View className="flex-row items-center pb-3 mx-4 space-x-2">
                <Image
                    source={{ uri: 'https://links.papareact.com/wru' }}
                    className="p-4 bg-gray-300 rounded-full h-7 w-7"
                />

                <View>
                    <Text className="text-xs font-bold text-gray-400">Deliver Now!</Text>
                    <Text className="text-xl font-bold">
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
