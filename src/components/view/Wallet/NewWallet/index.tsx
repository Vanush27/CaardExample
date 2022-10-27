import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import TopBar from '../../TopBar';
import { ButtonCustom, InputCustom } from '../../../shared';
import {FieldValues, useForm} from 'react-hook-form';

import { styles } from './styles';
import { COLOR_EDIT_BUTTON, LIT } from '../../../../constants';
import { useDispatch } from 'react-redux';
import {addNewWallet, WalletItem} from '../../../../redux/slices/walletSlice';

const NewWallet = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const [isToggleCard, setIsToggleCard] = useState<boolean>(false); // todo

  const [cardType, setCardType] = useState<string>('visa');  // todo

  const onPressCard = (typeName: string) => {
    setIsToggleCard(!isToggleCard);
    setCardType(typeName);
  };

  const onSubmit = (data: FieldValues) => { // todo
    dispatch(addNewWallet({ ...data, cardType }));
  };

  return (
    <View>
      <ScrollView>
        <TopBar />

        <View style={[styles.container_new_wallet, styles.shadowProp]}>
          <View style={styles.container_all_input}>
            <InputCustom
              control={control}
              defaultValue=""
              name="wallet_name"
              regName={{ ...register('wallet_name'), maxLength: 19 }}
              title="Wallet name"
              placeholder="Wallet name"
              errors={errors}
              isCardCredit
            />
            <InputCustom
              control={control}
              defaultValue=""
              regName={{ ...register('balance') }}
              title="Balance"
              name={'balance'}
              placeholder="Balance"
              errors={errors}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 64,
              }}>
              <ButtonCustom
                onPress={() => onPressCard('visa')}
                text="Visa"
                color={cardType === 'visa' ? '#404CB3' : '#FFFFFF'}
                size={LIT}
                height={34}
                borderRadius={4}
                textTransform="none"
              />
              <ButtonCustom
                onPress={() => onPressCard('master')}
                text="Master"
                color={cardType === 'master' ? '#404CB3' : '#FFFFFF'}
                size={LIT}
                height={34}
                textTransform="none"
                // type="#404CB3"
                borderRadius={4}
              />
            </View>
            <View style={styles.dashed} />

            <InputCustom
              title="Card number"
              placeholder="Card number"
              control={control}
              defaultValue=""
              regName={{ ...register('card_number') }}
              errors={errors}
              name="card_number"
            />

            <View style={styles.secure_code}>
              <View style={{ flex: 1 }}>
                <InputCustom
                  title="Expiry date"
                  placeholder="MM/YY"
                  control={control}
                  defaultValue=""
                  regName={{ ...register('expiry_date') }}
                  errors={errors}
                  name="expiry_date"
                />
              </View>
              <View style={styles.secure_code}>
                <InputCustom
                  title="Secure code"
                  placeholder="***"
                  control={control}
                  defaultValue=""
                  regName={{ ...register('secure_code') }}
                  errors={errors}
                  name="secure_code"
                />
              </View>
            </View>

            <InputCustom
              title="Name on card"
              placeholder="Name card"
              control={control}
              defaultValue=""
              regName={{ ...register('name_card') }}
              errors={errors}
              name="name_card"
            />

            <InputCustom
              title="Country registration"
              placeholder="Country registration"
              control={control}
              defaultValue=""
              regName={{ ...register('country_registration') }}
              errors={errors}
              name="country_registration"
            />

            <InputCustom
              title="Zip code"
              placeholder="zip code"
              control={control}
              defaultValue=""
              regName={{ ...register('zip_code') }}
              errors={errors}
              name="zip_code"
            />

            <View style={styles.city_state}>
              <View style={styles.city}>
                <InputCustom
                  title="City, state"
                  placeholder="City"
                  control={control}
                  defaultValue=""
                  regName={{ ...register('city') }}
                  errors={errors}
                  name="city"
                />
              </View>
              <View style={styles.state}>
                <InputCustom
                  title="state"
                  placeholder="state"
                  control={control}
                  defaultValue=""
                  regName={{ ...register('state') }}
                  errors={errors}
                  name="state"
                />
              </View>
            </View>

            <InputCustom
              title="Address"
              placeholder=""
              control={control}
              defaultValue=""
              regName={{ ...register('address') }}
              errors={errors}
              name="address"
            />

            <ButtonCustom
              text="Save changes"
              color={COLOR_EDIT_BUTTON}
              borderRadius={4}
              height={48}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewWallet;
