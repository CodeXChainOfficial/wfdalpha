import React from 'react'
import { HStack, Flex, Text } from '@chakra-ui/react'
import { Link, navigate } from '@reach/router'

import {
  isWefundWallet,
  isCommunityWallet,
  isBackerWallet,
  isCreatorWallet,
  getStageTitle,
  isCardHolder,
  isBackable,
} from '../Util'

import { ButtonTransition } from '../ImageTransition'
import { useStore } from '../../store'

export default function StatusButtons({
  index,
  data,
  activeTab,
  WefundApprove,
  MilestoneVote,
  NextFundraisingStage,
  Modify,
  OpenWhitelist,
  CloseWhitelist,
  JoinWhitelist
}) {
  const { state, dispatch } = useStore()
  return (
    <HStack spacing='10px'>
      {activeTab === 'WeFundApproval' && isWefundWallet(state) && (
        <ButtonTransition
          unitid={'Approve' + index}
          selected={false}
          width="150px"
          height="45px"
          rounded="33px"
          onClick={() =>
            WefundApprove(data.project_id)
          }
        >
          <Text fontSize= '16px'>
            Approve Project
          </Text>
        </ButtonTransition>
      )}
      {activeTab == "WhitelistOpen" && isCardHolder(state, data.project_id) && !isCommunityWallet(state) && (
        <ButtonTransition
          unitid={'Whitelist' + index}
          selected={false}
          width="150px"
          height="45px"
          rounded="33px"
          onClick={() =>
            JoinWhitelist(state, data.project_id)
          }
        >
          <Text fontSize= '16px'>
            Join Whitelist
          </Text>
        </ButtonTransition>
      )}
      {activeTab == "WhitelistOpen" && isCreatorWallet(state, data.project_id) && (
        <ButtonTransition
          unitid={'CloseWhitelist' + index}
          selected={false}
          width="150px"
          height="45px"
          rounded="33px"
          onClick={() =>
            CloseWhitelist(data.project_id)
          }
        >
          <Text fontSize= '16px'>
            Close Whitelist
          </Text>
        </ButtonTransition>
      )}
      {activeTab === 'Fundraising' && (
        <>
          <Text>{getStageTitle(data)} phase</Text>
          {isCreatorWallet(state, data.project_id) && (
          <>
            <ButtonTransition
              mb="10px"
              rounded="33px"
              selected={false}
              unitid={'next stage' + index}
              width="150px"
              height="45px"
              fontSize={{ base: '14px', lg: '16px' }}
              onClick={() => { NextFundraisingStage(data.project_id, data.fundraising_stage) }}
            >
              <Text fontSize={{ base: '14px', lg: '16px' }} >
                Next Stage
              </Text>
            </ButtonTransition>
            <ButtonTransition
              mb="10px"
              rounded="33px"
              selected={false}
              unitid={'openwhitelist' + index}
              width="150px"
              height="45px"
              fontSize={{ base: '14px', lg: '16px' }}
              onClick={() => OpenWhitelist(data.project_id)}
            >
              <Text fontSize={{ base: '14px', lg: '16px' }} >
                ReOpen Whitelist
              </Text>
            </ButtonTransition>
          </>
          )}
          {isBackable(state, data.project_id) && (
            <ButtonTransition
              mb="10px"
              rounded="33px"
              selected={false}
              unitid={'visit' + index}
              width="150px"
              height="45px"
              fontSize={{ base: '14px', lg: '16px' }}
              onClick={() => {
                navigate(
                  '/invest_step1?project_id=' +
                  data.project_id,
                )
              }}
            >
              <Text fontSize={{ base: '14px', lg: '16px' }} >
                Back Project
              </Text>
            </ButtonTransition>
          )}

        </>
      )}
      {activeTab === 'MileStoneDelivery' && isBackerWallet(state, data.project_id) && (
        <>
          <ButtonTransition
            unitid={'milestonevoteyes' + index}
            width="150px"
            height="45px"
            fontSize={{ base: '14px', lg: '16px' }}
            selected={false}
            rounded="33px"
            onClick={() =>
              MilestoneVote(data.project_id, true)
            }
          >
            <Text
              fontSize={{
                base: '14px',
                lg: '16px',
              }}
            >
              Vote Yes
            </Text>
          </ButtonTransition>

          <ButtonTransition
            unitid={'milestonevoteno' + index}
            selected={false}
            width="150px"
            height="45px"
            fontSize={{ base: '14px', lg: '16px' }}
            rounded="33px"
            onClick={() =>
              MilestoneVote(data.project_id, false)
            }
          >
            <Text
              fontSize={{
                base: '14px',
                lg: '16px',
              }}
            >
              Vote No
            </Text>
          </ButtonTransition>
        </>
      )}
      {isCreatorWallet(state, data.project_id) && (
        <ButtonTransition
          mb="10px"
          rounded="33px"
          selected={false}
          unitid={'modification' + index}
          width="150px"
          height="45px"
          fontSize={{ base: '14px', lg: '16px' }}
          onClick={() => { Modify(data.project_id) }}
        >
          <Text fontSize={{ base: '14px', lg: '16px' }} >
            Modify
          </Text>
        </ButtonTransition>
      )}
    </HStack>
  )
};
