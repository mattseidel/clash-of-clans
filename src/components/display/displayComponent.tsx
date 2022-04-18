import React, { useCallback, useId, useRef } from "react";
import { useDispatch } from "react-redux";
import { useFetch } from "../../hooks/useFetch";
import { Clans } from "../../interfaces/clans";
import { NEXT_PAGE } from "../../store/types";
import { CardList } from "../cards/CardList";
import { FilterComponentConnected } from "../filter/FilterComponent";
import "./style.css";

export const DisplayComponent = () => {
  const { data, loading, hasMore } = useFetch<any>({
    url: new URL("https://api.clashofclans.com/v1/clans"),
  });
  const id = useId()
  const dispatch = useDispatch();
  const observer = useRef<IntersectionObserver | null>(null);
  const lastClan = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log("next page");

          dispatch({ type: NEXT_PAGE, payload: data.paging.cursors.after });
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="card-position col-sm-12 col-md-4 col-lg-4 col-xl-3">
            <FilterComponentConnected />
          </div>
          <div className="col-sm-12 col-md-8 col-xl-9">
            <div className="row">
              {data &&
                data?.items?.map((clan: Clans, index:number) => {
                  if (data?.paging?.cursors?.after)
                  return (
                    <div key={`${id} + ${index}`} ref={lastClan}>
                    <CardList clan={clan}/>
                    </div>
                  
                    );
                  else
                    return (
                     <CardList key={clan.tag} clan={clan}/>
                    );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
